import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesUpdateWithoutStatInput } from "../inputs/MoveMetaStatChangesUpdateWithoutStatInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput", {})
export class MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateWithoutStatInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateWithoutStatInput;
}
