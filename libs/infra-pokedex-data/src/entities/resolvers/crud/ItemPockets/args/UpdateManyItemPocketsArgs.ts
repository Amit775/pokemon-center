import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsUpdateManyMutationInput } from "../../../inputs/ItemPocketsUpdateManyMutationInput";
import { ItemPocketsWhereInput } from "../../../inputs/ItemPocketsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemPocketsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;
}
