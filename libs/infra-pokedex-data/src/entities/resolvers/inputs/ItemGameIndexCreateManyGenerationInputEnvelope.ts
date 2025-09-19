import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyGenerationInput } from "../inputs/ItemGameIndexCreateManyGenerationInput";

@TypeGraphQL.InputType("ItemGameIndexCreateManyGenerationInputEnvelope", {})
export class ItemGameIndexCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateManyGenerationInput], {
    nullable: false
  })
  data!: ItemGameIndexCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
