import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMoveInputEnvelope } from "../inputs/MoveMetaCreateManyMoveInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMoveInput } from "../inputs/MoveMetaCreateOrConnectWithoutMoveInput";
import { MoveMetaCreateWithoutMoveInput } from "../inputs/MoveMetaCreateWithoutMoveInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateNestedManyWithoutMoveInput", {})
export class MoveMetaCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput[] | undefined;
}
