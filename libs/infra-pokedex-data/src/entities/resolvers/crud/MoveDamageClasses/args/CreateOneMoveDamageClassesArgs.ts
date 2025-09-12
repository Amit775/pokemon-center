import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesCreateInput } from "../../../inputs/MoveDamageClassesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesCreateInput, {
    nullable: false
  })
  data!: MoveDamageClassesCreateInput;
}
