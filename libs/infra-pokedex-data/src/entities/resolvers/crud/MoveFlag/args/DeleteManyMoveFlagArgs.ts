import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagWhereInput } from "../../../inputs/MoveFlagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;
}
