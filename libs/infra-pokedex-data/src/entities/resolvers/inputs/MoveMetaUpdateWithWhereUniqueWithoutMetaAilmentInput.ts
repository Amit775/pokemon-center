import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateWithoutMetaAilmentInput } from "../inputs/MoveMetaUpdateWithoutMetaAilmentInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput", {})
export class MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutMetaAilmentInput, {
    nullable: false
  })
  data!: MoveMetaUpdateWithoutMetaAilmentInput;
}
