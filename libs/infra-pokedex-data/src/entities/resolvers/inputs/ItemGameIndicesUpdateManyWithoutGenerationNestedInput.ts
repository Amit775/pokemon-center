import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/ItemGameIndicesCreateManyGenerationInputEnvelope";
import { ItemGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateOrConnectWithoutGenerationInput";
import { ItemGameIndicesCreateWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateWithoutGenerationInput";
import { ItemGameIndicesScalarWhereInput } from "../inputs/ItemGameIndicesScalarWhereInput";
import { ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput";
import { ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput";
import { ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateManyWithoutGenerationNestedInput", {})
export class ItemGameIndicesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: ItemGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: ItemGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: ItemGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemGameIndicesScalarWhereInput[] | undefined;
}
