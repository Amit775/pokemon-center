import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexScalarWhereInput } from "../inputs/ItemGameIndexScalarWhereInput";
import { ItemGameIndexUpdateManyMutationInput } from "../inputs/ItemGameIndexUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateManyWithWhereWithoutGenerationInput", {})
export class ItemGameIndexUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndexScalarWhereInput, {
    nullable: false
  })
  where!: ItemGameIndexScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemGameIndexUpdateManyMutationInput;
}
