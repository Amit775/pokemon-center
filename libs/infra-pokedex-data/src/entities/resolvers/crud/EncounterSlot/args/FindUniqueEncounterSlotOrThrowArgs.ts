import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotWhereUniqueInput } from "../../../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterSlotOrThrowArgs {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;
}
