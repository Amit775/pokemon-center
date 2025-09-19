import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyGenerationInputEnvelope } from "../inputs/MoveCreateManyGenerationInputEnvelope";
import { MoveCreateOrConnectWithoutGenerationInput } from "../inputs/MoveCreateOrConnectWithoutGenerationInput";
import { MoveCreateWithoutGenerationInput } from "../inputs/MoveCreateWithoutGenerationInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutGenerationInput } from "../inputs/MoveUpdateManyWithWhereWithoutGenerationInput";
import { MoveUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutGenerationInput";
import { MoveUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutGenerationInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutGenerationNestedInput", {})
export class MoveUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: MoveCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyGenerationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
