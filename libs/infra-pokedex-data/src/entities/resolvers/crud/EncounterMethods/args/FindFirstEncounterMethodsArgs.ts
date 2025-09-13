import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsOrderByWithRelationInput } from "../../../inputs/EncounterMethodsOrderByWithRelationInput";
import { EncounterMethodsWhereInput } from "../../../inputs/EncounterMethodsWhereInput";
import { EncounterMethodsWhereUniqueInput } from "../../../inputs/EncounterMethodsWhereUniqueInput";
import { EncounterMethodsScalarFieldEnum } from "../../../../enums/EncounterMethodsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterMethodsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterMethodsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "order"> | undefined;
}
