import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemUpdateManyMutationInput } from "../../../inputs/ItemUpdateManyMutationInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemArgs {
  @TypeGraphQL.Field(_type => ItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
