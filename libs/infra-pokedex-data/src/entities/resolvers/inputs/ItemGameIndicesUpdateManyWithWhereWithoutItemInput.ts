import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesScalarWhereInput } from "../inputs/ItemGameIndicesScalarWhereInput";
import { ItemGameIndicesUpdateManyMutationInput } from "../inputs/ItemGameIndicesUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateManyWithWhereWithoutItemInput", {})
export class ItemGameIndicesUpdateManyWithWhereWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesScalarWhereInput, {
    nullable: false
  })
  where!: ItemGameIndicesScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemGameIndicesUpdateManyMutationInput;
}
