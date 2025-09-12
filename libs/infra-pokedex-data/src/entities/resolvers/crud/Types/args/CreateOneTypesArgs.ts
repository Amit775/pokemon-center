import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesCreateInput } from "../../../inputs/TypesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypesArgs {
  @TypeGraphQL.Field(_type => TypesCreateInput, {
    nullable: false
  })
  data!: TypesCreateInput;
}
