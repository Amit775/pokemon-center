import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateWithoutStatInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateOrConnectWithoutStatInput", {})
export class MoveMetaStatChangesCreateOrConnectWithoutStatInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateWithoutStatInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateWithoutStatInput;
}
