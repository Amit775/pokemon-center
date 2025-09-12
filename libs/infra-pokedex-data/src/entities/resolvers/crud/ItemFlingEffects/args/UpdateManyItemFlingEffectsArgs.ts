import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsUpdateManyMutationInput } from "../../../inputs/ItemFlingEffectsUpdateManyMutationInput";
import { ItemFlingEffectsWhereInput } from "../../../inputs/ItemFlingEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlingEffectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;
}
