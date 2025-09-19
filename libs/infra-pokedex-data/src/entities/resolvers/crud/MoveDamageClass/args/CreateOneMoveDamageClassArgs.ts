import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassCreateInput } from "../../../inputs/MoveDamageClassCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassCreateInput, {
    nullable: false
  })
  data!: MoveDamageClassCreateInput;
}
