import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateWithoutGenerationInput } from "../inputs/ItemGameIndexCreateWithoutGenerationInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexCreateOrConnectWithoutGenerationInput", {})
export class ItemGameIndexCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: ItemGameIndexCreateWithoutGenerationInput;
}
