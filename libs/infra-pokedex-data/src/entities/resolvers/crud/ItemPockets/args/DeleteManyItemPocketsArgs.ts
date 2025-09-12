import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsWhereInput } from "../../../inputs/ItemPocketsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;
}
