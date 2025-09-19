import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassWhereInput } from "../../../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.ArgsType()
export class TypeDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;
}
