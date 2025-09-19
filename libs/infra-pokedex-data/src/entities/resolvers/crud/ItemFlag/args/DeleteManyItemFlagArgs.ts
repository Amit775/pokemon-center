import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagWhereInput } from "../../../inputs/ItemFlagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;
}
