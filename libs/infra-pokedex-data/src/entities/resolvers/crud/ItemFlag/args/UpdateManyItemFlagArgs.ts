import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagUpdateManyMutationInput } from "../../../inputs/ItemFlagUpdateManyMutationInput";
import { ItemFlagWhereInput } from "../../../inputs/ItemFlagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;
}
