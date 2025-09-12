import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateWithoutStatInput";
import { MoveMetaStatChangesUpdateWithoutStatInput } from "../inputs/MoveMetaStatChangesUpdateWithoutStatInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput", {})
export class MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateWithoutStatInput, {
    nullable: false
  })
  update!: MoveMetaStatChangesUpdateWithoutStatInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateWithoutStatInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateWithoutStatInput;
}
