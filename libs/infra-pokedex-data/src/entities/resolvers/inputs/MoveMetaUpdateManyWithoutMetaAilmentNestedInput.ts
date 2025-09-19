import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaAilmentInputEnvelope } from "../inputs/MoveMetaCreateManyMetaAilmentInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateOrConnectWithoutMetaAilmentInput";
import { MoveMetaCreateWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateWithoutMetaAilmentInput";
import { MoveMetaScalarWhereInput } from "../inputs/MoveMetaScalarWhereInput";
import { MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput } from "../inputs/MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput";
import { MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput } from "../inputs/MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput";
import { MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput } from "../inputs/MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateManyWithoutMetaAilmentNestedInput", {})
export class MoveMetaUpdateManyWithoutMetaAilmentNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMetaAilmentInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMetaAilmentInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput], {
    nullable: true
  })
  upsert?: MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMetaAilmentInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMetaAilmentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  set?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput], {
    nullable: true
  })
  update?: MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput], {
    nullable: true
  })
  updateMany?: MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaScalarWhereInput[] | undefined;
}
