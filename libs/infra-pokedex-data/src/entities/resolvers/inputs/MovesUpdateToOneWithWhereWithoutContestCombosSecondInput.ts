import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutContestCombosSecondInput } from "../inputs/MovesUpdateWithoutContestCombosSecondInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutContestCombosSecondInput", {})
export class MovesUpdateToOneWithWhereWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestCombosSecondInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutContestCombosSecondInput;
}
