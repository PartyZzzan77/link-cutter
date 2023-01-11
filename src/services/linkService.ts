import { Link } from '../models/Link.js'
import shortid from 'shortid'

export const getLimitLinks = async () => {
	return await Link.find().limit(5)
}

export const saveLink = async (source: string) => {
	const newLink = new Link({
		cipher: shortid(),
		source,
	})
	return await newLink.save()
}

export const getLinkWithCipher = async (cipher: string) => {
	return await Link.findOne({ cipher })
}

