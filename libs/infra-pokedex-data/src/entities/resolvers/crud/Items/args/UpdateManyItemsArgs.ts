import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsUpdateManyMutationInput } from "../../../inputs/ItemsUpdateManyMutationInput";
import { ItemsWhereInput } from "../../../inputs/ItemsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemsArgs {
  @TypeGraphQL.Field(_type => ItemsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
