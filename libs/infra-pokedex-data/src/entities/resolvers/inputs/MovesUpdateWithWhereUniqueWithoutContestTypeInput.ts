import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutContestTypeInput } from "../inputs/MovesUpdateWithoutContestTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateWithWhereUniqueWithoutContestTypeInput", {})
export class MovesUpdateWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestTypeInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutContestTypeInput;
}
