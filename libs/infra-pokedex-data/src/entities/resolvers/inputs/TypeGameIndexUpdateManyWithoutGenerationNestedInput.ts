import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyGenerationInputEnvelope } from "../inputs/TypeGameIndexCreateManyGenerationInputEnvelope";
import { TypeGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/TypeGameIndexCreateOrConnectWithoutGenerationInput";
import { TypeGameIndexCreateWithoutGenerationInput } from "../inputs/TypeGameIndexCreateWithoutGenerationInput";
import { TypeGameIndexScalarWhereInput } from "../inputs/TypeGameIndexScalarWhereInput";
import { TypeGameIndexUpdateManyWithWhereWithoutGenerationInput } from "../inputs/TypeGameIndexUpdateManyWithWhereWithoutGenerationInput";
import { TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput";
import { TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateManyWithoutGenerationNestedInput", {})
export class TypeGameIndexUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: TypeGameIndexUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeGameIndexScalarWhereInput[] | undefined;
}
