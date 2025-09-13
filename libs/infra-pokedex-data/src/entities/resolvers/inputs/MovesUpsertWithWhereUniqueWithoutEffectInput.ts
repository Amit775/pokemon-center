import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutEffectInput } from "../inputs/MovesCreateWithoutEffectInput";
import { MovesUpdateWithoutEffectInput } from "../inputs/MovesUpdateWithoutEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutEffectInput", {})
export class MovesUpsertWithWhereUniqueWithoutEffectInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutEffectInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutEffectInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutEffectInput, {
    nullable: false
  })
  create!: MovesCreateWithoutEffectInput;
}
