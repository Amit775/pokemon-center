import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutMetaAilmentInput } from "../inputs/MoveMetaCreateWithoutMetaAilmentInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateOrConnectWithoutMetaAilmentInput", {})
export class MoveMetaCreateOrConnectWithoutMetaAilmentInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutMetaAilmentInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutMetaAilmentInput;
}
