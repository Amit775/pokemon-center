import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateWithoutGenerationInput } from "../inputs/ItemGameIndexCreateWithoutGenerationInput";
import { ItemGameIndexUpdateWithoutGenerationInput } from "../inputs/ItemGameIndexUpdateWithoutGenerationInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput", {})
export class ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: ItemGameIndexUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: ItemGameIndexCreateWithoutGenerationInput;
}
