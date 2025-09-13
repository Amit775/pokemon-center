import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyStatInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyStatInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutStatInput";
import { MoveMetaStatChangesCreateWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateWithoutStatInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateNestedManyWithoutStatInput", {})
export class MoveMetaStatChangesCreateNestedManyWithoutStatInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutStatInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaStatChangesWhereUniqueInput[] | undefined;
}
