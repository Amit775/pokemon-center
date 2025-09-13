import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/TypeGameIndicesCreateManyGenerationInputEnvelope";
import { TypeGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateOrConnectWithoutGenerationInput";
import { TypeGameIndicesCreateWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateWithoutGenerationInput";
import { TypeGameIndicesScalarWhereInput } from "../inputs/TypeGameIndicesScalarWhereInput";
import { TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput";
import { TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput";
import { TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateManyWithoutGenerationNestedInput", {})
export class TypeGameIndicesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeGameIndicesScalarWhereInput[] | undefined;
}
