import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutTypeInput } from "../inputs/MovesUpdateWithoutTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateWithWhereUniqueWithoutTypeInput", {})
export class MovesUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutTypeInput;
}
