import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyGenerationInputEnvelope } from "../inputs/TypesCreateManyGenerationInputEnvelope";
import { TypesCreateOrConnectWithoutGenerationInput } from "../inputs/TypesCreateOrConnectWithoutGenerationInput";
import { TypesCreateWithoutGenerationInput } from "../inputs/TypesCreateWithoutGenerationInput";
import { TypesScalarWhereInput } from "../inputs/TypesScalarWhereInput";
import { TypesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/TypesUpdateManyWithWhereWithoutGenerationInput";
import { TypesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/TypesUpdateWithWhereUniqueWithoutGenerationInput";
import { TypesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/TypesUpsertWithWhereUniqueWithoutGenerationInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateManyWithoutGenerationNestedInput", {})
export class TypesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: TypesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  set?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: TypesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: TypesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypesScalarWhereInput[] | undefined;
}
