import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyGenerationInput } from "../inputs/ItemGameIndicesCreateManyGenerationInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateManyGenerationInputEnvelope", {})
export class ItemGameIndicesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateManyGenerationInput], {
    nullable: false
  })
  data!: ItemGameIndicesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
