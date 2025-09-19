import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyGenerationInputEnvelope } from "../inputs/TypeCreateManyGenerationInputEnvelope";
import { TypeCreateOrConnectWithoutGenerationInput } from "../inputs/TypeCreateOrConnectWithoutGenerationInput";
import { TypeCreateWithoutGenerationInput } from "../inputs/TypeCreateWithoutGenerationInput";
import { TypeScalarWhereInput } from "../inputs/TypeScalarWhereInput";
import { TypeUpdateManyWithWhereWithoutGenerationInput } from "../inputs/TypeUpdateManyWithWhereWithoutGenerationInput";
import { TypeUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeUpdateWithWhereUniqueWithoutGenerationInput";
import { TypeUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeUpsertWithWhereUniqueWithoutGenerationInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateManyWithoutGenerationNestedInput", {})
export class TypeUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: TypeUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  set?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: TypeUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: TypeUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeScalarWhereInput[] | undefined;
}
