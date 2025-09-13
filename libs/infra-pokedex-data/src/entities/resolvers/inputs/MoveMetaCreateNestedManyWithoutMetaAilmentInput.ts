import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaAilmentInputEnvelope } from "../inputs/MoveMetaCreateManyMetaAilmentInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateOrConnectWithoutMetaAilmentInput";
import { MoveMetaCreateWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateWithoutMetaAilmentInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateNestedManyWithoutMetaAilmentInput", {})
export class MoveMetaCreateNestedManyWithoutMetaAilmentInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMetaAilmentInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMetaAilmentInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMetaAilmentInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMetaAilmentInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMetaAilmentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput[] | undefined;
}
