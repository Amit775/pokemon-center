import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyTargetTypeInputEnvelope } from "../inputs/TypeEfficacyCreateManyTargetTypeInputEnvelope";
import { TypeEfficacyCreateOrConnectWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateOrConnectWithoutTargetTypeInput";
import { TypeEfficacyCreateWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateWithoutTargetTypeInput";
import { TypeEfficacyScalarWhereInput } from "../inputs/TypeEfficacyScalarWhereInput";
import { TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput } from "../inputs/TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput";
import { TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput } from "../inputs/TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput";
import { TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput } from "../inputs/TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateManyWithoutTargetTypeNestedInput", {})
export class TypeEfficacyUpdateManyWithoutTargetTypeNestedInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateWithoutTargetTypeInput], {
    nullable: true
  })
  create?: TypeEfficacyCreateWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyCreateOrConnectWithoutTargetTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeEfficacyCreateOrConnectWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput], {
    nullable: true
  })
  upsert?: TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateManyTargetTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeEfficacyCreateManyTargetTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  set?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput], {
    nullable: true
  })
  update?: TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput], {
    nullable: true
  })
  updateMany?: TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeEfficacyScalarWhereInput[] | undefined;
}
