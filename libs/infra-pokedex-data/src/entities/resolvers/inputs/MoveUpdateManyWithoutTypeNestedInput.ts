import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTypeInputEnvelope } from "../inputs/MoveCreateManyTypeInputEnvelope";
import { MoveCreateOrConnectWithoutTypeInput } from "../inputs/MoveCreateOrConnectWithoutTypeInput";
import { MoveCreateWithoutTypeInput } from "../inputs/MoveCreateWithoutTypeInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutTypeInput } from "../inputs/MoveUpdateManyWithWhereWithoutTypeInput";
import { MoveUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutTypeInput";
import { MoveUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutTypeNestedInput", {})
export class MoveUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutTypeInput], {
    nullable: true
  })
  create?: MoveCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
