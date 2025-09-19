import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexUpdateManyMutationInput } from "../../../inputs/ItemGameIndexUpdateManyMutationInput";
import { ItemGameIndexWhereInput } from "../../../inputs/ItemGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemGameIndexUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  where?: ItemGameIndexWhereInput | undefined;
}
