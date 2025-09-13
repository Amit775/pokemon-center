import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutTypeInput } from "../inputs/MovesCreateWithoutTypeInput";
import { MovesUpdateWithoutTypeInput } from "../inputs/MovesUpdateWithoutTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutTypeInput", {})
export class MovesUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: MovesCreateWithoutTypeInput;
}
