import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexUpdateWithoutGenerationInput } from "../inputs/ItemGameIndexUpdateWithoutGenerationInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput", {})
export class ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: ItemGameIndexUpdateWithoutGenerationInput;
}
