import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyGenerationInputEnvelope } from "../inputs/ItemGameIndexCreateManyGenerationInputEnvelope";
import { ItemGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/ItemGameIndexCreateOrConnectWithoutGenerationInput";
import { ItemGameIndexCreateWithoutGenerationInput } from "../inputs/ItemGameIndexCreateWithoutGenerationInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexCreateNestedManyWithoutGenerationInput", {})
export class ItemGameIndexCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: ItemGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndexWhereUniqueInput[] | undefined;
}
