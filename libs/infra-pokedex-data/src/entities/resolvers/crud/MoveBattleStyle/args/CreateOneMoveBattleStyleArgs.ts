import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleCreateInput } from "../../../inputs/MoveBattleStyleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleCreateInput, {
    nullable: false
  })
  data!: MoveBattleStyleCreateInput;
}
