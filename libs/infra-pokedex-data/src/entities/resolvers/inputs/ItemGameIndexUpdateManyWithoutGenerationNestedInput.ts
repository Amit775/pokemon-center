import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyGenerationInputEnvelope } from "../inputs/ItemGameIndexCreateManyGenerationInputEnvelope";
import { ItemGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/ItemGameIndexCreateOrConnectWithoutGenerationInput";
import { ItemGameIndexCreateWithoutGenerationInput } from "../inputs/ItemGameIndexCreateWithoutGenerationInput";
import { ItemGameIndexScalarWhereInput } from "../inputs/ItemGameIndexScalarWhereInput";
import { ItemGameIndexUpdateManyWithWhereWithoutGenerationInput } from "../inputs/ItemGameIndexUpdateManyWithWhereWithoutGenerationInput";
import { ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput";
import { ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateManyWithoutGenerationNestedInput", {})
export class ItemGameIndexUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: ItemGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: ItemGameIndexUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: ItemGameIndexUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: ItemGameIndexUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemGameIndexScalarWhereInput[] | undefined;
}
