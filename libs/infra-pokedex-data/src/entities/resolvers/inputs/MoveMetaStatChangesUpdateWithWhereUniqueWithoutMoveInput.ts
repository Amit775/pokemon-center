import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesUpdateWithoutMoveInput } from "../inputs/MoveMetaStatChangesUpdateWithoutMoveInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput", {})
export class MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateWithoutMoveInput;
}
