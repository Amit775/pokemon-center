import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagWhereUniqueInput } from "../../../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagWhereUniqueInput;
}
