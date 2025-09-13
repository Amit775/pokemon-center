import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesUpdateWithoutMetaInput } from "../inputs/MoveMetaStatChangesUpdateWithoutMetaInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput", {})
export class MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateWithoutMetaInput;
}
