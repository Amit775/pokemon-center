import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsUpdateManyMutationInput } from "../../../inputs/BerryFlavorsUpdateManyMutationInput";
import { BerryFlavorsWhereInput } from "../../../inputs/BerryFlavorsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  where?: BerryFlavorsWhereInput | undefined;
}
