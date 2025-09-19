import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyEffectInputEnvelope } from "../inputs/MoveCreateManyEffectInputEnvelope";
import { MoveCreateOrConnectWithoutEffectInput } from "../inputs/MoveCreateOrConnectWithoutEffectInput";
import { MoveCreateWithoutEffectInput } from "../inputs/MoveCreateWithoutEffectInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutEffectInput } from "../inputs/MoveUpdateManyWithWhereWithoutEffectInput";
import { MoveUpdateWithWhereUniqueWithoutEffectInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutEffectInput";
import { MoveUpsertWithWhereUniqueWithoutEffectInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutEffectNestedInput", {})
export class MoveUpdateManyWithoutEffectNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutEffectInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  set?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutEffectInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutEffectInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
